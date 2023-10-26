<template>
    <section class="blog-right-side-bar" :class="content.section_bg_color">
        <div class="container">
            <h5 v-if="content.title" class="alt-font text-center text-extra-dark-gray font-weight-400" style="color: #bf8c4c">
                {{ content.title }}
            </h5>
            <div class="row justify-content-center">
                <div class="col-12 blog-details-text last-paragraph-no-margin" style="font-size: 17px;">
                    <div v-for="body in content.body" :key="content._key">
                        <ol v-if="body.hasOwnProperty('listItem') && body.listItem === 'number' && body.hasOwnProperty('level') && body.level === 1">
                            <li v-if="body.markDefs.length > 0 && body.markDefs[0].hasOwnProperty('href')">
                                <a style="text-decoration: underline; color: blue;" target="_blank" :href="body.markDefs[0]?.href">{{ body.children[0]?.text }}</a>
                            </li>
                            <li v-else>{{ body.children[0].text }}</li>
                        </ol>
                        <ul v-if="body.hasOwnProperty('listItem') && body.listItem === 'bullet' && body.hasOwnProperty('level') && body.level === 1">
                            <li v-if="body.markDefs.length > 0 && body.markDefs[0].hasOwnProperty('href')">
                                <a style="text-decoration: underline; color: blue;" target="_blank" :href="body.markDefs[0]?.href">{{ body.children[0]?.text }}</a>
                            </li>
                            <li v-else>{{ body.children[0].text }}</li>
                        </ul>
                        <div style="margin-left: 30px;" class="" v-if="body.hasOwnProperty('listItem') && body.hasOwnProperty('level') && body.level === 2">
                            <ol type="a" v-if="body.hasOwnProperty('listItem') && body.listItem === 'bullet'">
                                <li v-if="body.markDefs.length > 0 && body.markDefs[0].hasOwnProperty('href')">
                                    <a style="text-decoration: underline; color: blue;" target="_blank" :href="body.markDefs[0]?.href">{{ body.children[0]?.text }}</a>
                                </li>
                                <li v-else>{{ body.children[0].text }}</li>
                            </ol>
                            <ol v-if="body.hasOwnProperty('listItem') && body.listItem === 'number'">
                                <li v-if="body.markDefs.length > 0 && body.markDefs[0].hasOwnProperty('href')">
                                    <a style="text-decoration: underline; color: blue;" target="_blank" :href="body.markDefs[0]?.href">{{ body.children[0]?.text }}</a>
                                </li>
                                <li v-else>{{ body.children[0].text }}</li>
                            </ol>
                        </div>
                        <!--<ol v-if="body.hasOwnProperty('listItem') && body.listItem === 'number'">
                            <li v-if="body.markDefs.length > 0 && body.markDefs[0].hasOwnProperty('href')"><a
                                style="text-decoration: underline; color: blue;" target="_blank" :href="body.markDefs[0]?.href">{{
                                    body.children[0]?.text }}</a></li>
                            <li v-else>{{ body.children[0].text }}</li>
                        </ol> -->
                        <p v-if="body._type === 'block' && body.children[0].text === ''" ></p>
                        <p v-if="body._type === 'block'">
                            <span v-if="!body.hasOwnProperty('listItem')" v-for="child in body.children" :key="child._key" class="mt-3">
                                <span v-if="child._type === 'span'">
                                    <h6 style="color: #bf8c4c" v-if="child.marks.length > 0 && child.marks[0] === 'strong'">{{ child.text }}</h6>
                                    <span v-else>{{ child.text }}</span>
                                </span>
                            </span>
                        </p>
                    </div>
                    <!-- <div v-for="body in content.body" :key="content._key">
                        <p v-if="body._type === 'block'">
                            <ul v-if="body.hasOwnProperty('listItem') && body.listItem === 'bullet'">
                            <li v-if="body.markDefs.length > 0 && body.markDefs[0].hasOwnProperty('href')"><a
                                style="text-decoration: underline; color: blue;" target="_blank" :href="body.markDefs[0]?.href">{{
                                    body.children[0]?.text }}</a></li>
                            <li v-else>{{ body.children[0].text }}</li>
                            </ul>

                            <span v-if="!body.hasOwnProperty('listItem')" v-for="child in body.children" :key="child._key" class="mt-3">
                            <span v-if="child._type === 'span'">
                                <span style="color: #bf8c4c" v-if="child.marks.length > 0 && child.marks[0] === 'strong'">{{ child.text
                                }}</span>
                                <span v-else>{{ child.text }}</span>
                            </span>
                            </span>
                        </p>
                    </div>            -->
                </div>
            </div>
        </div>
  </section>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: () => {},
  },
});

</script>