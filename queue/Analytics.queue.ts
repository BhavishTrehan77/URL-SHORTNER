import {Queue} from "bullmq"


export const analyticQueue=new Queue("analytics-job",{
    connection:{
        host:"redis-container",
        port:6379
    }
})


