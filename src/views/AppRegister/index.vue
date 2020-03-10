<template>
    <section class="appregisterbox">
        <div class="appregister">
            <UserHeader />
            <UserCard />
        </div>
    </section>
</template>

<script>
import UserHeader from "@/components/AppUser/UserHeader"
import UserCard from "@/components/AppUser/UserRegisterCard"

export default {
    components : {
        UserHeader,
        UserCard,
    }
}
</script>

<style lang="scss">

</style>