const statusService = require('../service/statusService');

const getStatus = async (req, res) => {
    try {
        const status = await statusService.findStatus();
        res.status(200).json(status);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getStatusById = async (req, res) => {
    try {
        const status = await statusService.findStatusById(req.params.id);
        res.status(200).json(status);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const createStatus = async(req,res)=>{
    try{
        const status = await statusService.createStatus(req.body)
        res.status(200).json(status)
    }catch(error){
        res.status(400).json({message:error.message})
    }
};

const updateStatus = async (req, res) => {
try{
    const status = await statusService.updateStatus(req.body,req.params.id)
    res.status(200).json(status)
}catch(error){
    res.status(400).json({message:error.message})}
}


const deleteStatus = async (req, res) => {
    try {
        const status = await statusService.deleteStatus(req.params.id);
        res.status(200).json(status);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getStatus,
    getStatusById,
    createStatus,
    updateStatus,
    deleteStatus,
}