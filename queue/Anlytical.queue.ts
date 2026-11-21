import{Queue} from "bullmq"

const AnalyticalQueue=new Queue("Ananlytical-Queue",{
    connection:{
        host:"localhost",
        port:6379
    }
})

export default AnalyticalQueue