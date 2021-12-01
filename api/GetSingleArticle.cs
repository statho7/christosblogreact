using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace ChristosBlog
{
    public static class GetSingleArticle
    {
        [FunctionName("GetSingleArticle")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "GetSingleArticle/{id}")] HttpRequest req,
            [CosmosDB(
                databaseName: "ChristosBlog",
                collectionName: "Articles",
                ConnectionStringSetting = "CosmosConnection",
                SqlQuery ="SELECT * FROM c WHERE c.id = {id}")] IEnumerable<Article> articles,
            ILogger log)
        {
            if (articles == null)
            {
                return new NotFoundResult();
            }

            return new OkObjectResult(articles);
        }
    }
}
