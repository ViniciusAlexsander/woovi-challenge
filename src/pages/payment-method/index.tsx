import { Grid, Typography, Box, Radio } from "@mui/material";
import logo from "../../shared/images/Logo.svg";
import securityIcon from "../../shared/images/securityIcon.svg";
import logoFooter from "../../shared/images/logoFooter.svg";

const installments: IInstallments[] = [
  {
    id: "123",
    quantity: 2,
    value: 15300,
    total: 30600,
    alert: null,
  },
  {
    id: "234",
    quantity: 3,
    value: 10196.66,
    total: 30620,
    alert: null,
  },
  {
    id: "345",
    quantity: 4,
    value: 7725.0,
    total: 30900,
    alert: "-3% de juros: Melhor opção de parcelamento",
  },
  {
    id: "567",
    quantity: 5,
    value: 6300.0,
    total: 31500,
    alert: null,
  },
  {
    id: "789",
    quantity: 6,
    value: 5283.33,
    total: 31699.98,
    alert: null,
  },
  {
    id: "901",
    quantity: 7,
    value: 4542.85,
    total: 31800.0,
    alert: null,
  },
];

const pixPaymentMock: IPixPaymentProps = {
  pix: {
    alert: "🤑 R$ 300,00 de volta no seu Pix na hora",
    cashback: 3,
    total: 30500,
    quantity: 1,
    id: "123",
  },
};

export const PaymentMethod = () => {
  return (
    <Grid container>
      <Grid item xs={12} justifyContent="center" display="flex">
        <img src={logo} width="123px" height="auto" />
      </Grid>
      <Grid item xs={12} justifyContent="center" display="flex" mt={5}>
        <Typography variant="h6" fontWeight="bold">
          João, como você quer pagar?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <PixPayment pix={pixPaymentMock} />
      </Grid>
      <Grid item xs={12}>
        <PixInstallmentsPayment installments={installments} />
      </Grid>
      <Grid item xs={12} mt={5}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={0.5}
        >
          <img src={securityIcon} />
          <Typography color="rgba(178, 178, 178, 1)">
            Pagamento 100% seguro via:
          </Typography>
          <img src={logoFooter} />
        </Box>
      </Grid>
    </Grid>
  );
};

interface IPixPaymentProps {
  pix: {
    id: string;
    quantity: number;
    total: number;
    cashback: number;
    alert: string | null;
  };
}

const PixPayment = ({ pix }: IPixPaymentProps) => {
  const { alert, cashback, quantity, total } = pix;

  return (
    <Grid
      container
      justifyContent="center"
      display="flex"
      mt={4}
      sx={{
        border: "2px solid rgba(229, 229, 229, 1)",
        borderRadius: "10px",
        padding: 2,
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(229, 229, 229, 1)",
          position: "absolute",
          top: -13,
          left: 20,
          padding: "0 16px",
          borderRadius: "12px",
        }}
      >
        <Typography variant="body2" fontWeight="800">
          Pix
        </Typography>
      </Box>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">
            <strong>{quantity}x</strong>{" "}
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Typography>
          <Radio />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography color="rgba(3, 214, 157, 1)">
          Ganhe {cashback}% de Cashback
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: "rgba(19, 58, 111, 1)",
            padding: 1,
            borderRadius: "4px",
            clipPath:
              "polygon(100% 0%, 96% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);",
          }}
        >
          <Typography color="rgba(255, 255, 255, 1)">{alert}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

interface IPixInstallmentsPaymentProps {
  installments: IInstallments[];
}

interface IInstallments {
  id: string;
  quantity: number;
  value: number;
  total: number;
  alert: string | null;
}

const PixInstallmentsPayment = ({
  installments,
}: IPixInstallmentsPaymentProps) => {
  return (
    <Grid
      container
      justifyContent="center"
      display="flex"
      mt={4}
      sx={{
        border: "2px solid rgba(229, 229, 229, 1)",
        borderRadius: "10px",
        ".installment + .installment": {
          borderTop: "2px solid rgba(229, 229, 229, 1)",
        },
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(229, 229, 229, 1)",
          position: "absolute",
          top: -13,
          left: 20,
          padding: "0 16px",
          borderRadius: "12px",
        }}
      >
        <Typography variant="body2" fontWeight="800">
          Pix Parcelado
        </Typography>
      </Box>
      {installments.map((installment, index) => (
        <Grid
          className="installment"
          key={index}
          item
          xs={12}
          sx={{
            padding: 2,
          }}
        >
          <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h5">
                <strong>{installment.quantity}x</strong>{" "}
                {installment.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Typography>
              <Radio />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="rgba(175, 175, 175, 1)">
              Total:{" "}
              {installment.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Typography>
          </Grid>
          {installment.alert && (
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: "rgba(19, 58, 111, 1)",
                  padding: 0.5,
                  borderRadius: "4px",
                  clipPath:
                    "polygon(100% 0%, 96% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);",
                }}
              >
                <Typography color="rgba(255, 255, 255, 1)">
                  {installment.alert}
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      ))}
    </Grid>
  );
};
