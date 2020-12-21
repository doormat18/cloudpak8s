import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/ContainersOnDock.jpg';

const FirstLeftText = () => <p>Cloud Pak Playbook is now Cloud Paks At Work</p>;
const FirstRightText = () => (
  <p>
    <font size="5">
   All installation related instructions have been removed. The site contains solution-oriented information on using IBM Cloud Paks and information on managing your environment. For IBM Cloud Pak installation instructions, please visit the IBM Knowledge Center at the link below:
    </font>
    <a
      className={calloutLink}
      href="https://www.ibm.com/support/knowledgecenter/en/cloudpaks"
    >
      IBM Knowledge Center →
    </a>
  </p>
);

const SecondLeftText = () => <p>IBM Cloud Paks</p>;

const SecondRightText = () => (
  <p>
    <font size="5">
    IBM Cloud™ Paks are enterprise-ready, containerized software solutions 
    that give clients an open, faster and more secure way to move core 
    business applications to any cloud.
    </font>
    <a
      className={calloutLink}
      href="https://www.ibm.com/cloud/paks/"
    >
      IBM Cloud Paks →
    </a>
  </p>
);

const BannerText = () => <h1>Cloud Paks At Work</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#030303"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
