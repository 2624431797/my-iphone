<template>
    <section class="apploginbox">
        <div class="applogin">
            <UserHeader />
            <UserCard />
        </div>
    </section>
</template>

<script>
import UserHeader from "@/components/AppUser/UserHeader"
import UserCard from "@/components/AppUser/UserLoginCard"

export default {
    components : {
        UserHeader,
        UserCard,
    }
}
</script>

<style lang="scss">

</style>