"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
import { toast } from "sonner";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";

export function SignInForm() {
  const { signIn } = useAuthActions();
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");
  const [submitting, setSubmitting] = useState(false);

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitting(true);
          const formData = new FormData(e.target as HTMLFormElement);
          formData.set("flow", flow);
          void signIn("password", formData).catch((error) => {
            let toastTitle = "";
            if (error.message.includes("Invalid password")) {
              toastTitle = "Invalid password. Please try again.";
            } else {
              toastTitle =
                flow === "signIn"
                  ? "Could not sign in, did you mean to sign up?"
                  : "Could not sign up, did you mean to sign in?";
            }
            toast.error(toastTitle);
            setSubmitting(false);
          });
        }}
      >
        <TextField type="email" name="email" label="Email" variant="outlined" required />
        <TextField type="password" name="password" label="Password" variant="outlined" required />
        <Button variant="contained" color="secondary" type="submit" disabled={submitting} sx={{ py: 1.5 }}>
          {flow === "signIn" ? "Sign In" : "Sign Up"}
        </Button>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          {flow === "signIn" ? "Don't have an account? " : "Already have an account? "}
          <Button variant="text" size="small" onClick={() => setFlow(flow === "signIn" ? "signUp" : "signIn")}>
            {flow === "signIn" ? "Sign Up" : "Sign In"}
          </Button>
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }}>OR</Divider>
      <Button variant="outlined" fullWidth onClick={() => void signIn("anonymous")}>
        Sign In Anonymously
      </Button>
    </Box>
  );
}
