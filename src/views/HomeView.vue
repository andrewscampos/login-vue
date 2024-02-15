<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h3 class="text-center">Conecte a sua Conta</h3>
                    <h5 class="text-center grey--text">Faça login em sua conta para continuar construindo
                      <br />
                      e editando seus fluxos de integração
                    </h5>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="10">
                        <v-text-field label="e-mail" outlined dense color="blue" autocomplete="false" class="mt-16">
                        </v-text-field>
                        <v-text-field label="password" outlined dense color="blue" autocomplete="false" type="password">
                        </v-text-field>
                        <v-row >
                          <v-col cols="12" sm="6">
                            <v-checkbox label="Lembre-me" class="mt-1 checkbox"  color="blue">
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <label class="caption  blue--text" style="">Esqueceu sua senha?</label>
                          </v-col>
                        </v-row>
                        <v-btn color="blue" dark block tile>Login</v-btn>
                        <br />
                        <div class="d-flex justify-space-between align-center mx-10 mb-16">
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="black">fab fa-github</v-icon>
                          </v-btn>
                        </div>
                      </v-col>

                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" class="blue rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center"> Não tem uma conta?</h3>
                      <h5 class="text-center">Vamos preparar tudo para que você possa começar a criar sua <br /> primeira experiência de integração</h5>
                    </v-card-text>
                    <div class="text-center"> 
                      <v-btn tile outlined dark @click="step++">Cadastrar-se</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                  <v-col cols="12" sm="6" class="blue rounded-br-xl">
                    <div style="text-align:center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h3 class="text-center">já se inscreveu?</h3>
                        <h5 class="text-center">faça login em sua conta para continuar construindo e <br /> editando seus fluxos de integração</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--"> Login</v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="6">
                     <v-card-text class="mt-12">
                       <h3 class="text-center">Inscreva-se pra uma conta</h3>
                       <h5 class="text-center">Vamos preparar tudo para que você possa começar a criar<br /> a primeira experiência de integração</h5>
                       <v-row align="center" justify="center">
                          <v-col cols="12" sm="10">
                            <v-row >
                              <v-col cols="12" sm="12">
                                 <v-text-field label="Nome:" outlined dense color="blue" autocomplete="false" class="mt-1">
                                 </v-text-field>
                                 <v-text-field label="e-mail:" outlined dense color="blue" type="email" autocomplete="false" >
                                 </v-text-field>
                                 <v-text-field label="Senha:" outlined dense color="blue" type="password" autocomplete="false" >
                                 </v-text-field>
                                 <v-text-field label="Confime a Senha:" outlined dense color="blue" autocomplete="false" type="password">
                                 </v-text-field>
                              </v-col>
                            </v-row>
                            <v-btn tile color="blue" dark block> Cadastrar-se </v-btn>
                          </v-col>

                       </v-row>
                     </v-card-text>
                  </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script> 

  export default {
    name: 'HomePage',
    data: () => ({
      step: 1
    }),
    components: {
      
    },
  }
</script>
<style scoped>
.v-application .rounded-bl-xl{
  border-bottom-left-radius: 300px !important;
}
.checkbox{
  margin-top: -6px !important
}
.v-application .rounded-br-xl{
  border-bottom-right-radius: 300px !important;
}
</style>
