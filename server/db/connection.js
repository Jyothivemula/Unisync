const mongoose =require('mongoose');
const DB= "mongodb+srv://vemulajyothi:jyothivemula@cluster0.zkunnjg.mongodb.net/tap?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected');
    
}).catch((err) => {
    console.error('Database connection error:', err);
});