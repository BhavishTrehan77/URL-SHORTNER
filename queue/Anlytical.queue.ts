import{Queue} from "bullmq"

const AnalyticalQueue=new Queue("Ananlytical-Queue",{
    connection:{
        host:"redis-container",
        port:6379
    }
})

export default AnalyticalQueue