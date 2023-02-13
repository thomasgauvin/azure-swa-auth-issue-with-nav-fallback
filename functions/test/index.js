module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const header = req.headers["x-ms-client-principal"];

    context.res = {
        headers: {
            "content-type": "text/html; charset=utf-8"
        },
        body: `<div><a href="/.auth/login/aad">Login with AAD</a></div>
            <div><a href="/">Home</a> | <a href="/another-page">Another page</a></div>
            <div>The header 'x-ms-client-principal' was ${header}</div>`
    };
}
