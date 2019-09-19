using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentNHibernate.Mapping;
using NHibernateDemo.Domain;

namespace NHibernateDemo.DAL.Mappings
{
    public class TeamMap : ClassMap<Team>
    {
        public TeamMap()
        {
            Id(x => x.Id);
            Map(x => x.Founded);
            Map(x => x.Name);
            HasMany(x => x.Players)
                .Inverse();
        }
    }
}
