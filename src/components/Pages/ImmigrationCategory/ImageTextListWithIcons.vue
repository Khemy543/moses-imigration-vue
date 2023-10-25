<template>
    <section class="overlap-height md-no-padding-top xs-padding-40px-top">
        <div class="container">
        <p>
            <p v-for="body in content.body" :key="content._key">{{ body?.children[0].text }}</p>
        </p>
        <div
            class="row align-items-center justify-content-center overlap-gap-section"
        >
            <div
            class="col-12 col-lg-6 col-md-10 text-center text-lg-end md-margin-30px-bottom wow animate__fadeIn"
            data-wow-delay="0.2s"
            >
            <img
                :src="url"
                alt=""
                style="width: 100%; height: 520px; object-fit: cover"
            />
            </div>
            <div class="col-12 col-lg-5 offset-lg-1 col-md-10 ps-lg-0">     
                <div
                    v-for="list in content.list"
                    :key="list._key"
                    class="feature-box feature-box-left-icon border-bottom border-color-medium-gray padding-40px-tb xs-padding-25px-tb wow animate__fadeInRight"
                    data-wow-delay="0.2s"
                >
                    <div class="feature-box-icon">
                    <vue-feather
                        :type="list.icon"
                        size="30"
                        stroke="#bf8c4c"
                    ></vue-feather>
                    </div>
                    <div class="feature-box-content last-parsee hereagraph-no-margin">
                    <span
                        class="alt-font font-weight-500 margin-5px-bottom d-block text-medium-slate-blue"
                        >{{ list.name }}</span
                    >
                    </div>
                </div>
            </div>
        </div>
        </div>
  </section>
</template>
<script setup>
import { computed } from 'vue';
import { urlFor } from "../../../helpers/sanity-helpers";
const props = defineProps({
    content: {
        type: Object,
        default: () => {},
    }
});

const img = computed(
  () => urlFor( props.content.image )
);

const url = img.value
</script>