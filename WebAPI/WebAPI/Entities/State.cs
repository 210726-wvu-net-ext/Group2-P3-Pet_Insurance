﻿using System;
using System.Collections.Generic;

#nullable disable

namespace WebAPI.Entities
{
    public partial class State
    {
        public int Id { get; set; }
        public string StateName { get; set; }
        public bool CrestedGecko { get; set; }
        public bool PantherChameleon { get; set; }
        public bool BlueTonguedSkink { get; set; }
        public bool MountainHornedDragon { get; set; }
        public bool SpinyTailedMonitor { get; set; }
        public bool GreenBasilisk { get; set; }
        public bool VeiledChameleon { get; set; }
        public bool LeopardGecko { get; set; }
        public bool MoroccanUromastyx { get; set; }
        public bool BeardedDragon { get; set; }
    }
}