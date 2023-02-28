import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';

import AccountBalance from '@/content/Dashboards/Crypto/AccountBalance';
import Wallets from '@/content/Dashboards/Crypto/Wallets';
import AccountSecurity from '@/content/Dashboards/Crypto/AccountSecurity';
import WatchList from '@/content/Dashboards/Crypto/WatchList';

function DashboardCrypto() {
  return (
    <>
      <Head>
        <title>Binderly - Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
