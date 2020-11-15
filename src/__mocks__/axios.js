export default {
    get: jest.fn( () => Promise.resolve( {data: { name: "thr"} })),
    post: jest.fn( () => Promise.resolve( {data: { name: "thr"} }))
};