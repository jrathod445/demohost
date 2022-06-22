const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
var route = require('./route');
mongoose.connect("").then(()=>{
    console.log("DB connected");

    app = express();
    app.use(bodyParser.urlencoded)
    ({extends:false})
    app.use(express.json())
    app.use('/api,route')

    app.listen(5000,()=>{
        console.log("server started at 5000");

    })
}).catch((err) =>{
    console.log(err);
})