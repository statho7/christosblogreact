using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace ChristosBlog
{
    public static class GetAllArticles
    {
        [FunctionName("GetAllArticles")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "GetAllArticles")] HttpRequest req,
            [CosmosDB(
                databaseName: "ChristosBlog",
                collectionName: "Articles",
                ConnectionStringSetting = "CosmosConnection",
                SqlQuery ="SELECT * FROM c ORDER BY c.Date DESC")] IEnumerable<Article> articles,
            ILogger log)
        {
            if (articles == null)
            {
                return new NotFoundResult();
            }

            // return new NotFoundResult();
            return new OkObjectResult(articles);
        }
    }
}

//     public static class GetArticle
//     {
//         [FunctionName("GetArticle")]
//         public static async Task<IActionResult> Run(
//             [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "GetArticle/{id}")] HttpRequest req, TraceWriter log, string id,
//             [CosmosDB(
//                 databaseName: "ChristosBlog",
//                 collectionName: "Articles",
//                 ConnectionStringSetting = "CosmosConnection",
//                 SqlQuery ="SELECT * FROM c WHERE c.id = " + id)] IEnumerable<Article> article,
//             ILogger log)
//         {
//             if (article == null)
//             {
//                 return new NotFoundResult();
//             }

//             return new OkObjectResult(article);
//         }
//     }