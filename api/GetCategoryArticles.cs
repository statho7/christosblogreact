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
    public static class GetCategoryArticles
    {
        [FunctionName("GetCategoryArticles")]
       public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "GetCategoryArticles/{name}")] HttpRequest req,
            [CosmosDB(
                databaseName: "ChristosBlog",
                collectionName: "Articles",
                ConnectionStringSetting = "CosmosConnection",
                SqlQuery ="SELECT TOP 20 c.id, c.Author, c.Title, c.ImgLink, c.Category, c.Subcategory FROM c WHERE c.Category = {name} ORDER BY c.Date DESC")] IEnumerable<Article> articles,
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
