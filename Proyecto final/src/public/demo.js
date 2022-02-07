var app = new Vue({
    el: '#app',
    data: {
        
    mensajes:{
        titulo:"",
        mensaje:" "
    }, 
    Recivirdatos:{

    },
    id_para_editar:' ',
    interuptor: false,
    },
    created: function () {
        this.get();
      },
    methods:{
        borrar(){
            this.mensajes.titulo= null,
            this.mensajes.mensaje= null
        },
            send(){
                if(this.interuptor === false){
                    fetch('/inicio',{
                        method:'POST',
                        body: JSON.stringify(this.mensajes),
                        headers: {
                          'Accept':'application/json' ,
                          'Content-type':'application/json'
                        },
                      })
                    .then(res => res.json())
                    .then(data => { this.get(),console.log(data),this.borrar()});
                }
                else{
                    fetch('/inicio/'+ this.id_para_editar,{
                        method:'PUT',
                        body: JSON.stringify(this.mensajes),
                        headers: {
                          'Accept':'application/json' ,
                          'Content-type':'application/json'
                        },
                      })
                    .then(res => res.json())
                    .then(data => { this.get(),console.log(data),this.borrar()});
                    this.interuptor = false;
                }

        },
        get(){
            fetch('/inicio')
            .then(res => res.json())
            .then(data => {this.Recivirdatos = data});
          }, 

    Delete(id){
        fetch('/inicio/'+id,{
          method:'DELETE',
          headers: {
            'Accept':'application/json' ,
            'Content-type':'application/json'
          },
          
        })
        
      .then(res => res.json())
      .then(data => { this.get(),console.log(data)});
    },
    Update(id){
        fetch('/inicio/' + id)
        .then(res => res.json())
        .then(data =>{
           this.mensajes.titulo = data.titulo;
           this.mensajes.mensaje= data.mensaje; 
           this.id_para_editar = data._id;
           this.interuptor= true;
        })
    }
    }
  })