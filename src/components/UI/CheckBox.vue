<template>
    <input type="checkbox" />
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
input[type=checkbox] {
    cursor: pointer;
    width: 0px;
    height: 0px;
}

input[type=checkbox]:checked:before {
    content: "";
    display: block;
    position: relative;
    top: -11px;
    left: -9.5px;
    width: 19px;
    height: 19px;
    border: 4px solid #FFCB9A;
    border-radius: 20px;
    background-color: transparent;  
    transition: all 0.2s linear;
}


input[type=checkbox]:before {
    content: "";
    display: block;
    position: relative;
    top: -11px;
    left: -9.5px;
    width: 19px;
    height: 19px;
    border: 4px solid #FFCB9A;
    border-radius: 3px;
    background-color: transparent;
}


input[type=checkbox]:after {
    content: "";
    display: block;
    width: 0px;
    height: 0px;
    border: solid #FFCB9A;
    border-width: 0 0px 0px 0;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    position: relative;
    top: -30px;
    left: 10px;
    transition: all 0.2s linear;
}

input[type=checkbox]:checked:after {
    content: "";
    display: block;
    width: 6px;
    height: 10px;
    border: solid #FFCB9A;
    border-width: 0 3.5px 3.5px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: relative;
    top: -34px;
    left: 0px;
}
</style>