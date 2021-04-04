//using System;
//using System.Collections.Generic;
//using System.IO;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Builder;
//using Microsoft.Extensions.DependencyInjection;
//using Swashbuckle.AspNetCore.Swagger;

//namespace WeatherApi.Extensions
//{
//    public static class SwaggerExt
//    {
//        public static void ConfigureSwagger(this IServiceCollection services)
//        {
//            // services.AddSwaggerGen(options =>
//            // {
//            //     options.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
//            //     options.DescribeAllParametersInCamelCase();
//            // });
//            services.AddSwaggerGen(options =>
//            {
//                options.SwaggerDoc("v1", new Info
//                {
//                    Version = "v1",
//                    Title = "Dating App API",
//                    Description = "Dating API v1"
//                });

//                options.AddSecurityDefinition("Bearer", new ApiKeyScheme
//                {
//                    Description = "JWT Auth Header using the Bearer Scheme.",
//                    Name = "Authorization",
//                    In = "header",
//                    Type = "apiKey"
//                });


//                options.DescribeAllParametersInCamelCase();
//                // options.IncludeXmlComments(GetXmlFilePath());
//                options.DescribeAllEnumsAsStrings();
//                options.DescribeAllParametersInCamelCase();
//                // options.OperationFilter<AuthorizationHeaderOperationFilter>();
//                // options.OperationFilter<FormFileSwaggerFilter>();
//            });
//        }

//        public static void UseSwaggerMiddleware(this IApplicationBuilder app)
//        {
//            app.UseSwagger();

//            app.UseSwaggerUI(options =>
//            {
//                options.RoutePrefix = string.Empty;
//                options.SwaggerEndpoint("./swagger/v1/swagger.json", "Dating API v1");
//            });
//        }

//        private static string GetXmlFilePath()
//        {
//            var xmlPath = Path.Combine(AppContext.BaseDirectory, "Saffron.API.xml");
//            return xmlPath;
//        }
//    }
//}
