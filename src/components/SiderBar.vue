<template>
  <nav>
      <v-navigation-drawer dark app color="#2196F3" width="300">
            <div class="text-center mt-5">
                <v-btn fab color="white" style="z-index:1" x-large>
                     <img src="../assets/icon.png" width="40">
                </v-btn>
            </div>
            
            <v-list flat class="mat-1 " >
                <v-list-item-group style="font-size:14px" v-model="selectedItem" color="#2196F3">
                    <v-list-item v-for="(item, i) in itens" :key="i" active-class="border" :ripple="false" class="ml-2 my-3  ">
                        <b></b>
                        <b></b>
                       <v-list-item-icon>
                                 <v-icon style="font-size:12px"> 
                                    {{item.icon}}  
                                </v-icon> 
                                <span style="padding: 10px"> {{item.label}} </span>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
      </v-navigation-drawer>
  </nav>
</template>

<script>
export default {

    data: () =>({
        selectedItem: 0,
        draw: null,
        itens:[
                {
                    icon: 'fas fa-home',
                    label: 'Home'
                },
                {
                    icon: 'fab fa-whatsapp',
                    label: 'Canais'
                },
                {
                    icon: 'fas fa-users',
                    label: 'Grupos'
                },
                {
                    icon: 'fas fa-user',
                    label: 'Usuários'
                },
                {
                    icon: 'fas fa-robot',
                    label: 'Chatbot'
                },
                {
                    icon: 'fas fa-clone',
                    label:'Templates'
                },
                {
                    icon: 'fas fa-tags',
                    label:'Tag de Conversas'
                },
                {
                    icon: 'fas fa-address-book',
                    label: 'Tag de Contatos'
                },
                {
                    icon: 'fas fa-comments',
                    label: 'Gestão de Conversas'
                },
                {
                    icon: 'fas fa-headset',
                    label: 'Fila de Atendimento'
                },
                {
                    icon: 'fas fa-chart-bar',
                    label: 'Dashboards'
                },
                {
                    icon: 'fas fa-file-import',
                    label: 'Importar Contatos'
                },
                {
                    icon: 'fas fa-address-book',
                    label:'Contatos'
                },
                {
                    icon: 'fas fa-flag-checkered',
                    label: 'Motivos Finalização'
                }, 
                {
                    icon: 'fas fa-envelope',
                    label:'Enviar em Mensagem'
                },
                {
                    icon: 'fas fa-tasks',
                    label:'Gerenciar Mensagens'
                },
                {
                    icon: 'fas fa-graduation-cap',
                    label: 'Treinamento'
                },
            ]

    })

}
</script>

<style>

.border{
    background: #fff;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    text-decoration: none;
}
.border b:nth-child(1){
    position: absolute;
    top: -20px;
    height: 20px;
    width: 96%;
    background: #fff;
    display: none;
}
.border b:nth-child(1)::before{
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 20px;
    background: #2196F3;
}
.border b:nth-child(2){
    position: absolute;
    bottom: -20px;
    height: 10px;
    width: 96%;
    background: none;
}
.border b:nth-child(2)::before{
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 20px;
    background: #2196F3;
}
.border b:nth-child(1),
.border b:nth-child(2){
    display: block;
}
.v-list-item__icon{
    display: block;
}
.v-list-item {
    height: 10px; /* Defina o valor desejado para a altura */
}
::-webkit-scrollbar {
    width: 10px; /* largura da barra de rolagem */
    background-color: #fff; /* cor de fundo da barra de rolagem */
}

/* Cor do indicador de rolagem (o "thumb") */
::-webkit-scrollbar-thumb {
    background-color: #fff; /* cor do indicador de rolagem */
    border-radius: 5px; /* borda arredondada do indicador de rolagem */
}
 .zoomed {
        transform: scale(0.8);
        transform-origin: top left; /* Define o ponto de origem para o canto superior esquerdo */
        overflow: hidden; /* Impede que o conteúdo expandido vaze para fora da div */
    }
</style>

