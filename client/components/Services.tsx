import React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Services() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div id='services' className='section'>
      {/* SERVICES HEADER */}
      <h3 className='section-header'> WHAT WE OFFER </h3>

      {/* SERVICES ACCORDION */}
      <div className="services-accordion">
        {/* DEVELOPMENT MANAGEMENT */}
        <Accordion expanded={expanded === 'dev-mgmt'} onChange={handleChange('dev-mgmt')}>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />} 
            aria-controls="dev-mgmt-content" 
            id="dev-mgmt-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Development Management
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Third party management of construction projects.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Third party management of construction projects for developers, investors or tenants. The projects can range from industrial buildings to office fit-outs and will often vary from $100,000 to $100,000,000 in hard cost budgets. The assignments often commence at a feasibility stage and proceed through to occupancy. BPI will administer the projects on behalf of the owners; our service includes selection of appropriate consultants and contractors, cost consulting, payment certification, contract administration, review of changes, negotiation of contracts and general project management.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* PROJECT MONITORING */}
        <Accordion expanded={expanded === 'proj-mon'} onChange={handleChange('proj-mon')}>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />} 
            aria-controls="proj-mon'-content" 
            id="proj-mon'-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Project Monitoring
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Loan or project monitoring services during the course of a project.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              On behalf of lenders and equity owners on a construction project, BPI Consultants will provide loan or project monitoring services during the course of a project. This service includes payment certification of the contractor’s draws on a monthly basis. It may also include a general review of the construction project but does not include the day-to-day administration of the project. This is an independent review on the work of the project for the benefit of the owner or lending institution.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* REAL ESTATE CONSULTING */}
        <Accordion expanded={expanded === 're-cons'} onChange={handleChange('re-cons')}>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />} 
            aria-controls="re-cons-content" 
            id="re-cons-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Real Estate Consulting
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Feasibility studies, cash flow projections, financial proformas, and more.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              These assignments may not involve physical construction but may be completed prior to on-site work or for an existing facility. The tasks include feasibility studies, cash flow projections, financial proformas and modeling, relocation studies, due diligence inspections, technical reviews and forensic analysis. These assignments may be completed in conjunction with a management / monitoring role or independently.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
