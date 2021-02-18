<template>
    <div id="dash">
        <div class="dash">
            <div>
                <ul>
                    <li>GIDO</li>
                    <li><a href="#"> Home</a></li>
                </ul>
            </div>
            <div>
                 <ul>
                    <li><a href="#"> Home</a></li>
                     <li><a href="#"> Privacy</a></li>
                </ul>
            </div>
        </div>
        <div class="places">
            <ul>
                <li><a href="#">See Places</a></li>
                <li><a href="#">Add Places</a></li>
                <li><a href="#">Create Places</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'dash'
}
</script>

<style scoped>
.dash{
    background-color: rgb(24, 24, 24);
    color: white;
    top: 1px;
}
.places{
    color: white;
    background-color: rgb(73, 73, 247);
}
</style>
