// third-party
import React from 'react';
import { FormattedMessage } from 'react-intl';

// assets
import { UserOutlined, SettingOutlined, InfoCircleOutlined,RocketOutlined,DeploymentUnitOutlined,LoadingOutlined ,LineChartOutlined,CloudUploadOutlined} from '@ant-design/icons';

// icons
const icons = {
  UserOutlined,
  SettingOutlined,
  InfoCircleOutlined,RocketOutlined,DeploymentUnitOutlined, loading: LoadingOutlined,LineChartOutlined,CloudUploadOutlined
};

// ==============================|| MENU ITEMS - PROFILE ||============================== //

const Profile = {
  id: 'group-profile',
  title: <FormattedMessage id="profile" />,
  icon: icons.UserOutlined,
  type: 'group',
  children: [
    {
      id: 'about',
      title: <FormattedMessage id="About" />,
      type: 'item',
      url: '/profile/user',
      icon: icons.UserOutlined,
      breadcrumbs: false
    },
    {
      id:'Experience',
      title:<FormattedMessage id="Experience" />,
      type:'item',
      url:'/profile/experience',
      icon:icons.LineChartOutlined,
      breadcrumbs:false

    },
    {
      id: 'education-info',
      title: <FormattedMessage id="Education Info" />,
      type: 'item',
      url: '/profile/education',
      icon: icons.RocketOutlined,
      breadcrumbs: false
    },
    {
      id: 'projects',
      title: <FormattedMessage id="Projects" />,
      type: 'item',
      url: '/profile/projects',
      icon: icons.DeploymentUnitOutlined,
      breadcrumbs: false
    },
    {
      id: 'Achivements',
      title: <FormattedMessage id="Achivements" />,
      type: 'item',
      url: '/profile/Achivements',
      icon: icons.InfoCircleOutlined,
      breadcrumbs: false
    },
    {
      id: 'skills',
      title: <FormattedMessage id="Skills" />,
      type: 'item',
      url: '/profile/skills',
      icon: icons.CloudUploadOutlined,
      breadcrumbs: false
    }
  ]
};

export default Profile;
