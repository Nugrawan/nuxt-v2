<template>
    <section class="h-screen mb-20 bg-[url(/heroes.jpg)] bg-cover flex justify-center items-center">
        <div class="text-primary text-center font-semibold w-[40%]">
            <h1 class="text-8xl">Good Styles Cool Prices</h1>
            <p class="my-5 font-normal text-sm w-3/4 leading-5 mx-auto ">"Welcome to our website, where you can explore a
                collection of
                trendy,
                high-quality, and
                exclusive clothing and accessories. We offer a variety of styles for all occasions, from casual to formal"
            </p>
            <div class="flex justify-center gap-3">
                <ButtonComponents :primary=true target="/register" name="Get Started" />
                <ButtonComponents :primary=true target="/products/me" name="Your Products" />
            </div>
        </div>
    </section>
</template>