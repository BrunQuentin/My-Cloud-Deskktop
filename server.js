let express = require('express')
let app = express()
let bodyParser = require('body-parser')

app.set('view engine','ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.get('/',(request,response) =>{
	response.render('index.ejs',{test:'Coucou'})
	console.log("on est ici")
})

app.post('/',(request,response)=>{
	if(request.body.username==='bousebt'){
		response.render('accueil.ejs',{test:'Coucou'})
	}
})
console.log("asqd")
app.listen(8080)