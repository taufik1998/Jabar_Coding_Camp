<template>
    <v-card>
        <v-toolbar dark color="success">
            <v-btn icon dark @click.native="close">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-container fluid>
            <v-form ref="form">
                <v-text-field
                v-model="email"
                label="E-mail"
                required 
                append-icon="mdi-email"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showpassword ? 'text' : 'password'"
                    label="password"
                    counter
                    @click:append="showpassword = !showpassword"
                    ></v-text-field>

                    <div class="text-xs-center">
                        <v-btn
                        color="success lighten-1"
                        @click="submit"
                        >
                        login
                        <v-icon right dark>mdi-lock-open</v-icon>
                        </v-btn>

                    </div>
            </v-form>
        </v-container>


    </v-card>
</template>

<script>
export default{
    data() {
        return {
            email: '',
            showpassword: '',
            password: '',

        }
    },
    method : {
        close() {
            this.$emit('closed' , false)
        },
        submit() {
            alert('masuk method submit')
        }
    },
}
</script>
