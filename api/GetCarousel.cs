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
    public static class GetCarousel
    {
        [FunctionName("GetCarousel")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "GetCarousel")] HttpRequest req,
            [CosmosDB(
                databaseName: "ChristosBlog",
                collectionName: "Articles",
                ConnectionStringSetting = "CosmosConnection",
                SqlQuery ="SELECT TOP 5 c.id, c.Title, c.ImgLink FROM c WHERE c.Carousel = 'true' ORDER BY c.Date DESC")] IEnumerable<Article> article,
            ILogger log)
        {
            if (article == null)
            {
                return new NotFoundResult();
            }

            return new OkObjectResult(article);
        }
    }
}
