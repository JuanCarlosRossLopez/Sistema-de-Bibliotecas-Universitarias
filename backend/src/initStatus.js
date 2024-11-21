const Status =require('./models/Status');

const initStatus = async()=>{
const status=[
    {status:'Pendiente',description_status:'La peticion del libro esta pendiente'},
    {status:'Entregado',description_status:'El libro a sido entregado al alumno'},
    {status:'Expirado',description_status:'La fecha de entrega del libro a expirado'},
]

for(const statu of status){
    const existingStatus= await Status.findOne({
        where:{
            status:statu.status
        }
    });
    if(!existingStatus){
        await Status.create(statu)
    }
}
}

module.exports=initStatus;
