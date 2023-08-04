<template>
    <div id="Administracion">
        <h1>Componente Administracion</h1>
        <div v-if="flagButton">
            <button class="btn btn-primary" v-on:click="mostrarFormulario">Ingresar Datos</button>
        </div>

        <div v-if="flagForm" class="container">
            <form>
                <div class="mb-3">
                    <label for="txtNombre" class="form-label">Nombre:</label>
                    <input type="text" class="form-control" id="txtNombre" v-model="nombreEnviado" aria-describedby="txtNombreHelp">
                </div>
                <div class="mb-3">
                    <label for="txtApellido" class="form-label">Apellido:</label>
                    <input type="text" class="form-control" id="txtApellido" v-model="apellidoEnviado">
                </div>

                <button type="submit" v-on:click.prevent="enviarDatos()" class="btn btn-primary">Enviar</button>
            </form>

        </div>


        <div v-if="flagResumen" class="container">
            <div class="row">
                <div id="seccionNombre" class="col-md-3">
                    <p>Bienvenid@</p>
                    <p>{{ nombreEnviado }} {{ apellidoEnviado }}</p>
                </div>
                <div class="col-md-9">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2>Resumen de tu cuenta</h2>
                                        <h3>Le diste me gusta al juego: {{ nombre }}</h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div id="divCoins" class="container text-center">
                                            <p>¿Deseas Comprar Coins para este Juego?</p>
                                            <button id="btnCoins" class="btn btn-warning" v-on:click="agregarCoins">Agregar Coins</button>
                                            <hr>
                                            <p>Cantidad de Coins Comprados</p>
                                            <div class="progress" role="progressbar" aria-label="Example with label" v-bind:aria-valuenow="cantidadCoins" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar bg-success" style="">${{cantidadCoins}}</div>
                                            </div>
                                            <div v-if="flagMaximo">
                                                <p class="text-danger">Llegaste al maximo de tu credito</p>
                                            </div>
                                            <br><br>
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col-md-4 bg-warning">
                                        <p>Finalizacion</p>
                                        <hr>
                                        <p>17%</p>
                                    </div>
                                    <div class="col-md-4 bg-success">
                                        <p>Logros</p>
                                        <hr>
                                        <p>66</p>
                                    </div>
                                    <div class="col-md-4 bg-info">
                                        <p>Recompensas</p>
                                        <hr>
                                        <p>200</p>
                                    </div>
                                </div>
                            </div>

                </div>
            </div>
        </div>
        <router-link to="/">Volver</router-link>

    </div>
</template>

<script>
export default{
    name:'Administracion',
    props:['nombre'],
    data: function(){
        return{
            flagButton:true,
            flagForm:false,
            flagResumen:false,
            flagMaximo:false,
            nombreEnviado:'',
            apellidoEnviado:'',
            cantidadCoins:0,

        }
    },
    methods:{
        mostrarFormulario:function(){
            this.flagButton = false;
            this.flagForm=true;

        },
        enviarDatos:function(){
            this.flagForm=false;
            this.flagResumen=true;
        },
        agregarCoins:function(){
            this.cantidadCoins++;
            let laBarra = document.getElementsByClassName('progress-bar');
            let valorPorCiento='';
            if(this.cantidadCoins<50){
                valorPorCiento = `${this.cantidadCoins}%`;
                laBarra[0].style.width =valorPorCiento;
                if(this.cantidadCoins>20 && this.cantidadCoins<=30){
                    laBarra[0].classList.remove('bg-success');
                    laBarra[0].classList.add('bg-warning');
                }
                else if(this.cantidadCoins>30){
                    laBarra[0].classList.remove('bg-warning');
                    laBarra[0].classList.add('bg-danger');
                }
            }else{
                this.flagMaximo = true;
                let elBotonCoins = document.getElementById('btnCoins');
                elBotonCoins.setAttribute('disabled', true);
            }

        },
    }
}
</script>

<style scoped>
#Administracion{
    background-color: rgb(12, 10, 130);
}
#seccionNombre{
    background-color: black;
    color:white;
}
#divCoins{
    background-color: lightgoldenrodyellow;
}
h1{
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
  }
  h2{
    color: white;
  }
  h3{
    color: white;
  }
  label{
    color: white;
    font-weight: bold;
  }
</style>