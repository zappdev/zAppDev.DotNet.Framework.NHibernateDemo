# zAppDev Framework NHibernate Demo

## How to

This walkthrough tutorial will show how to use the zAppDev Framework NHibernate Demo

1. Install NHibernate to your project.You can see more information here
   
    https://nhibernate.info/doc/

2. Install zAppDev.DotNet.Framework.See more informations Here 
   
   https://github.com/zappdev/zAppDev.DotNet.Framework
3. Build a session manager to handle the communication with the database.
4. In your startup.cs, in the services area register the session manager.
5. In your startup.cs, the mvc service should have the followin json options
   
        services.AddMvc()
        .AddJsonOptions(options => {
            options.SerializerSettings.ReferenceLoopHandling =           ReferenceLoopHandling.Ignore;
            options.SerializerSettings.ContractResolver = new NHibernateContractResolver
            {
                NamingStrategy = new CamelCaseNamingStrategy()
            };
        });