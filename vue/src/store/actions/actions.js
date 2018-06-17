export default {
    updateCountAsync (store, data) {
        setTimeout(() => {
          store.state.count = data.num;
        },data.time)
    }
}