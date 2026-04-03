import React from 'react';
import {
  AppleFilled,
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
  FileAddOutlined,
  GoogleOutlined,
  SaveOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  App,
  Avatar,
  Button,
  Card,
  ConfigProvider,
  Divider,
  Flex,
  Input,
  Radio,
  Select,
  Slider,
  Space,
  Spin,
  Switch,
  Typography,
} from 'antd';
import type { ConfigProviderProps } from 'antd';
import { createStyles } from 'antd-style';
import clsx from 'clsx';

const { Title, Text } = Typography;

const useStyle = createStyles(({ css, token, cssVar }) => {
  return {
    wrapper: css({
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: `${token.paddingLG}px`,
      overflowX: 'auto',
    }),
    container: css({
      backgroundColor: `color-mix(in srgb, ${cssVar.colorBgContainer} 70%, transparent)`,
      backdropFilter: 'blur(12px)',
      padding: token.paddingLG,
      border: 'none',
      boxShadow: 'none',
      width: '100%',
      '.ant-card-body': {
        padding: 0,
      },
    }),
    layoutRow: css({
      display: 'flex',
      gap: token.paddingLG,
      alignItems: 'baseline',
      justifyContent: 'center',
      margin: '0 auto',
      width: 'max-content',
    }),
    colLeft: css({
      width: 300,
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingLG,
    }),
    colCenter: css({
      width: 400,
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingLG,
    }),
    colRight: css({
      width: 300,
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingLG,
    }),
    blockCard: css({
      background: cssVar.colorBgContainer,
      borderRadius: token.borderRadiusLG,
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      border: `1px solid ${token.colorBorderSecondary}`,
      padding: token.paddingLG,
    }),
  };
});

interface ComponentsBlockProps {
  config?: ConfigProviderProps;
  style?: React.CSSProperties;
  className?: string;
  containerClassName?: string;
  inherit?: boolean;
}

const ComponentsBlock: React.FC<ComponentsBlockProps> = (props) => {
  const { styles, theme: currentToken } = useStyle();
  const { config, style, className, containerClassName, inherit = false } = props;

  const { theme, ...restConfig } = config || {};

  const mergedTheme = React.useMemo(
    () => ({
      ...theme,
      inherit,
    }),
    [theme, inherit],
  );

  return (
    <ConfigProvider {...restConfig} theme={mergedTheme}>
      <Card className={clsx(containerClassName, styles.container)}>
        <App>
          <div style={style} className={clsx(styles.wrapper, className)}>
            <div className={styles.layoutRow}>
              {/* ================= LEFT COLUMN ================= */}
              <div className={styles.colLeft}>
                <div className={styles.blockCard}>
                  <Flex align="center" justify="space-between">
                    <Title level={5} style={{ margin: 0 }}>Options</Title>
                    <Switch defaultChecked />
                  </Flex>
                  <Divider />
                  <Flex vertical gap="middle">
                    <Radio checked>Default Radio</Radio>
                    <Slider defaultValue={30} />
                    <Input prefix={<EditOutlined />} placeholder="Edit something" />
                  </Flex>
                </div>
              </div>

              {/* ================= CENTER COLUMN ================= */}
              <div className={styles.colCenter}>
                <div className={styles.blockCard}>
                  <Flex justify="center" align="center" vertical>
                    <Avatar size={64} icon={<UserOutlined />} />
                    <Title level={4} style={{ marginTop: currentToken.marginSM }}>User Profile</Title>
                    <Text type="secondary">example@email.com</Text>
                  </Flex>
                  <Divider />
                  <Flex justify="space-around">
                    <Button type="primary" icon={<SaveOutlined />}>Save</Button>
                    <Button icon={<DeleteOutlined />} danger>Delete</Button>
                  </Flex>
                </div>
              </div>

              {/* ================= RIGHT COLUMN ================= */}
              <div className={styles.colRight}>
                <div className={styles.blockCard}>
                  <Flex align="center" justify="center" vertical gap="small">
                    <Space size="large">
                      <AppleFilled style={{ fontSize: 24 }} />
                      <GoogleOutlined style={{ fontSize: 24 }} />
                    </Space>
                    <Spin />
                  </Flex>
                  <Divider />
                  <Select
                    defaultValue="1"
                    style={{ width: '100%' }}
                    options={[
                      { value: '1', label: 'Item 1', icon: <FileAddOutlined /> },
                      { value: '2', label: 'Item 2', icon: <CommentOutlined /> }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </App>
      </Card>
    </ConfigProvider>
  );
};

export default ComponentsBlock;
