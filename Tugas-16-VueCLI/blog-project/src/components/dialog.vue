<template>
    
    <keep-alive>
        <v-dialog- v-model="dialog" fullscreen hide-overlay persistent transition="dialog-button-transition">
            <component :is="currentcomponent" @closed="setDialogstatus"></component>
        </v-dialog->
    </keep-alive>

</template>

<script>
import { mapGetters , mapActions } from 'vuex'

export default {
    components : {      login : () => import('./login.vue')

    },
    computed : {
    ...mapGetters({
        dialogstatus : 'dialog/status',
        currentcomponent : 'dialog/component',
    }),

    dialog : {
        get () {
            return this.dialogstatus
        },
        set (value) {
            this.setDialogstatus(value)
          }
      }
    },
    methods : {
        ...mapActions({
            setDialogstatus : 'dialog/status',
            }),
    }
}
</script>
