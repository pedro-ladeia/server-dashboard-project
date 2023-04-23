import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose)


const daySchema = new Schema(

    {
        date: String,
        revenue: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // Correcting the value
        },
        expenses: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // Correcting the value
        },
    },
    {toJSON: {getters: true}}

)

const monthSchema = new Schema(
    {
        month: String,
        revenue: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // Correcting the value
        },
        expenses: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // Correcting the value
        },
        operationalExpenses: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // Correcting the value
        },
        nonOperationalExpenses: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // Correcting the value
        },
    },
    {toJSON: {getters: true}}
)

const KPISchema = new Schema(
    {
        totalProfit: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // Correcting the value
        },

        totalRevenue: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // Correcting the value
        },

        totalExpenses: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // Correcting the value
        },

        expensesByCategory: {
            type: Map,
            of: {
                type:mongoose.Types.Currency,
                currency: "USD",
                get: (v) => v / 100 // Correcting the value
            }
        },

        monthlyData: [monthSchema],
        dailyData: [daySchema]
    },

    {timestamps: true, toJSON: {getters: true}}
)

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;