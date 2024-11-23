import { onMounted,onUnmounted } from "vue"
export const useRun=async (func,successHandler=()=>{},data=null)=>{
    // eslint-disable-next-line no-undef
    await google.script.run.withSuccessHandler(successHandler)[func](data)
}
export function useEventListener(target, event, callback) {
    // if you want, you can also make this
    // support selector strings as target
    onMounted(() => target.addEventListener(event, callback))
    onUnmounted(() => target.removeEventListener(event, callback))
}