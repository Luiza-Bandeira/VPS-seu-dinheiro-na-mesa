

## Plan: Add Principal Invested Evolution Chart

Add a new chart to the Patrimony Evolution page that tracks the cumulative **principal invested** (total contributions minus total withdrawals) over time, helping the user see if they're consistently growing their invested capital.

### What will be built

A new `Card` with an `AreaChart` placed between the existing patrimony evolution chart and the breakdown cards. This chart will show:

- **Aportes acumulados** (cumulative contributions) — green line
- **Resgates acumulados** (cumulative withdrawals) — red line  
- **Principal líquido** (net: contributions - withdrawals) — blue/magenta line

The chart reuses the same period selector (monthly/quarterly/yearly) already in state.

### Implementation

**File: `src/pages/PatrimonyEvolution.tsx`**

1. Add a new `useMemo` (`principalChartData`) that:
   - Iterates over the same time periods as `chartData`
   - For each point, sums all contributions up to that date → `aportesAcumulados`
   - Sums all withdrawals up to that date → `resgatesAcumulados`
   - Calculates `principalLiquido = aportesAcumulados - resgatesAcumulados`

2. Add a new `Card` section after the existing evolution chart (after line 312) with:
   - Title: "Evolução do Capital Investido"
   - Description: "Acompanhe se seus aportes superam os resgates ao longo do tempo"
   - An `AreaChart` with 3 areas (aportes in green, resgates in red, principal líquido in brand-blue)
   - Summary cards above the chart showing total contributed, total withdrawn, and net balance with a positive/negative indicator

3. Import `ArrowUpRight`, `ArrowDownRight` icons from lucide-react for the summary indicators.

No database changes needed — all data already exists in `investment_contributions` and `investment_withdrawals`.

