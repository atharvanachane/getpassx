import { onRequest as __api___route___js_onRequest } from "v:\\MERAWORK\\javachessproject\\Aditya web project\\frontend\\functions\\api\\[[route]].js"

export const routes = [
    {
      routePath: "/api/:route*",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api___route___js_onRequest],
    },
  ]