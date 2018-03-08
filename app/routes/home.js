module.exports = function(app){  
    app.get('/',function(req, res){  
        app.config.auth_test(function(resultado){
            res.render("home/index",{ title: 'Home', noticias: resultado });
        });
    });
}