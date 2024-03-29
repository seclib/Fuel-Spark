import styled from "@emotion/styled";
import { Column, Row } from "@src/components/Flex";
import React, { useMemo, useState } from "react";
import { observer } from "mobx-react";
import { useStores } from "@stores";
import Text, { TEXT_TYPES, TEXT_TYPES_MAP } from "@components/Text";
import Tab from "@components/Tab";
import Table from "@src/components/Table";
import SizedBox from "@components/SizedBox";
import { useTheme } from "@emotion/react";
import tableSizeSelector from "@src/assets/icons/tablesSize.svg";
import tableSizeExtraSmall from "@src/assets/icons/tableSizeExtraSmall.svg";
import tableSmallSize from "@src/assets/icons/tableSmallSize.svg";
import tableMediumSize from "@src/assets/icons/tableMediumSize.svg";
import tableLargeSize from "@src/assets/icons/tableLargeSize.svg";
import Tooltip from "@components/Tooltip";
import dayjs from "dayjs";
import Chip from "@components/Chip";
import { useSpotTradeScreenVM } from "@screens/TradeScreen/SpotTradeVm";

interface IProps {}

const Root = styled.div<{ size: string }>`
	background: ${({ theme }) => theme.colors.bgSecondary};
	display: flex;
	width: 100%;
	flex-direction: column;
	box-sizing: border-box;
	border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
	flex: 1;
	border-radius: 10px;

	max-width: 100%;
	overflow-x: scroll;

	& > * {
		min-width: 580px;
	}

	${({ size }) =>
		(() => {
			switch (size) {
				case "extraSmall":
					return `max-height: 120px;`;
				case "small":
					return `max-height: 197px;`;
				case "medium":
					return `max-height: 263px;`;
				case "large":
					return `max-height: 395px;`;
				default:
					return `max-height: 197px;`;
			}
		})()}
`;

//todo add info to columns
// margin is how much of collateral position is taking (degen)
export const TableTitle = styled(Text)`
	flex: 1;
	white-space: nowrap;
	${TEXT_TYPES_MAP[TEXT_TYPES.SUPPORTING]}
`;

export const TableText = styled(Text)`
	flex: 1;
	display: flex;
	align-items: center;
`;

export const TableRow = styled(Row)`
	margin-bottom: 1px;
	height: 32px;
	flex-shrink: 0;
	background: ${({ theme }) => theme.colors.bgPrimary};
	align-items: center;
	padding: 0 12px;
	box-sizing: border-box;

	:last-of-type {
		margin-bottom: 0;
	}
`;
const CancelButton = styled(Chip)`
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.colors.borderPrimary} !important;
`;
const TabContainer = styled(Row)`
	align-items: center;
	box-sizing: border-box;
	padding: 0 12px;
	height: 32px;
	position: relative;

	& > * {
		margin: 0 12px;
	}
`;
const TableSizeSelector = styled.div`
	position: absolute;
	right: 0;
	top: 4px;
`;
const TokenIcon = styled.img`
	width: 12px;
	height: 12px;
	border-radius: 50%;
`;
const TableSize = styled.div<{ active?: boolean }>`
	display: flex;
	align-items: center;
	padding: 4px 12px;
	box-sizing: border-box;
	width: 100%;
	cursor: pointer;

	${({ active, theme }) => active && `background: ${theme.colors.borderPrimary}`};

	:hover {
		background: ${({ theme }) => theme.colors.borderSecondary};
	}
`;

const tabs = [
	{ title: "ORDERS", disabled: false },
	{ title: "BALANCES", disabled: false },
];

const tableSizesConfig = [
	{ title: "Extra small", icon: tableSizeExtraSmall, size: "extraSmall" },
	{ title: "Small", icon: tableSmallSize, size: "small" },
	{ title: "Medium", icon: tableMediumSize, size: "medium" },
	{ title: "Large", icon: tableLargeSize, size: "large" },
];
const BottomTablesInterfaceSpot: React.FC<IProps> = observer(() => {
	const orderColumns = React.useMemo(
		() => [
			{ Header: "Date", accessor: "date" },
			{ Header: "Pair", accessor: "pair" },
			{ Header: "Status", accessor: "status" },
			{ Header: "Type", accessor: "type" },
			{ Header: "Amount", accessor: "amount" },
			{ Header: "Filled", accessor: "filled" },
			{ Header: "Price", accessor: "price" },
			{ Header: "", accessor: "action" },
		],
		[],
	);

	// const tradeColumns = React.useMemo(
	// 	() => [
	// 		{ Header: "Market", accessor: "market" },
	// 		{ Header: "Size", accessor: "size" },
	// 		{ Header: "Entry Price", accessor: "entry" },
	// 		{ Header: "Notional", accessor: "notional" },
	// 		{ Header: "Fee", accessor: "fee" },
	// 		{ Header: "Date", accessor: "date" },
	// 	],
	// 	[],
	// );
	const balanceColumns = React.useMemo(
		() => [
			{ Header: "Asset", accessor: "asset" },
			{ Header: "Balance", accessor: "balance" },
		],
		[],
	);

	const { spotOrdersStore, settingsStore, accountStore } = useStores();
	const columns = [orderColumns, balanceColumns];
	const vm = useSpotTradeScreenVM();
	const [tableSize, setTableSize] = useState(settingsStore.tradeTableSize ?? "small");
	const [tabIndex, setTabIndex] = useState(0);
	const [data, setData] = useState<any>([]);
	const theme = useTheme();
	useMemo(() => {
		switch (tabIndex) {
			case 0:
				setData(
					spotOrdersStore.mySpotOrders
						.filter(({ status }) => status === "Active")
						.map((order) => ({
							date: dayjs.unix(order.timestamp).format("DD MMM YY, HH:mm"),
							pair: order.market,
							status: order.status,
							type: (
								<TableText color={order.type === "SELL" ? theme.colors.redLight : theme.colors.greenLight}>
									{order.type}
								</TableText>
							),
							amount: <TableText primary>{order.amountStr}</TableText>,
							filled: order.fulfilled0.div(order.amount0).times(100).toFormat(2),
							price: order.price.toFixed(2),
							action: (
								<CancelButton onClick={() => vm.cancelOrder(order.orderId)}>{vm.loading ? "Loading..." : "Close"}</CancelButton>
							),
						})),
				);
				break;
			case 1:
				setData(
					accountStore.assetBalances
						?.filter(({ balance }) => balance && balance.gt(0))
						?.map((balance) => ({
							asset: (
								<Row alignItems="center">
									<TokenIcon src={balance.logo} alt="market-icon" />
									<SizedBox width={4} />
									{balance.symbol}
								</Row>
							),
							balance: accountStore.getBalanceFormatted(balance.assetId, 4),
						})),
				);
				break;
		}
	}, [tabIndex, accountStore, spotOrdersStore.mySpotOrders, theme.colors.redLight, theme.colors.greenLight, vm.loading]);
	return (
		<Root size={tableSize}>
			<TabContainer>
				{tabs.map(({ title, disabled }, index) => (
					<Tab
						disabled={disabled}
						key={title + index}
						active={tabIndex === index}
						onClick={() => !disabled && setTabIndex(index)}
					>
						{title}
					</Tab>
				))}
				<TableSizeSelector>
					<Tooltip
						config={{ placement: "bottom-start", trigger: "click" }}
						content={
							<Column crossAxisSize="max" style={{ zIndex: 500 }}>
								{tableSizesConfig.map(({ size, icon, title }) => (
									<TableSize
										active={size === tableSize}
										onClick={() => {
											settingsStore.setTradeTableSize(size);
											setTableSize(size);
										}}
										key={title}
									>
										<img src={icon} alt={title} />
										<SizedBox width={4} />
										<Text nowrap type={TEXT_TYPES.BUTTON}>
											{title.toUpperCase()}
										</Text>
									</TableSize>
								))}
							</Column>
						}
					>
						<img src={tableSizeSelector} alt="tableSizeSelector" style={{ cursor: "pointer" }} />
					</Tooltip>
				</TableSizeSelector>
			</TabContainer>
			<Column style={{ overflowY: "scroll" }} crossAxisSize="max">
				<Table
					columns={columns[tabIndex]}
					data={data}
					style={{
						whiteSpace: "nowrap",
						width: "fitContent",
						minWidth: "fit-content",
					}}
				/>
			</Column>
		</Root>
	);
});
export default BottomTablesInterfaceSpot;
