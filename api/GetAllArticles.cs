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
    public class Article
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }
        public string Title { get; set; }
        public string ImgLink { get; set; }
        public string VideoLink { get; set; }
        public string VideoLink1 { get; set; }
        public string VideoLink2 { get; set; }
        public string VideoLink3 { get; set; }
        public string VideoLink4 { get; set; }
        public string Content { get; set; }
        public string Category { get; set; }
        public string Subcategory { get; set; }
        public string Author { get; set; }
        public string Date { get; set; }
        public string Carousel { get; set; }
    }

    public static class GetAllArticles
    {
        [FunctionName("GetAllArticles")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "GetAllArticles")] HttpRequest req,
            [CosmosDB(
                databaseName: "ChristosBlog",
                collectionName: "Articles",
                ConnectionStringSetting = "CosmosConnection",
                SqlQuery ="SELECT TOP 20 * FROM c ORDER BY c.Date DESC")] IEnumerable<Article> articles,
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