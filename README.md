# Azure Static Web Apps Issue With Auth and Navigation Fallback

This example application shows the issue that Azure Static Web Apps does not include the `x-ms-client-principal` header
when the route falls into `navigationFallback`. Here is the related GitHub issue: https://github.com/Azure/static-web-apps/issues/1053

When deploying this application to Azure Static Web Apps and you perform a login you will see that the header is present on the home page but not on any other URL.

When running the same application locally with [`swa`](https://azure.github.io/static-web-apps-cli/) then the header is present on all routes.

