import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response(JSON.stringify({ error: "L'email i la contrasenya són obligatoris" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // Traduïm alguns errors comuns de Supabase al català
    let missatge = '';
    if (error.message.includes("Invalid login credentials")) {
      missatge = "Credencials incorrectes. Revisa l'email i la contrasenya.";
    } else {
      missatge = "Error en iniciar sessió: " + error.message;
    }

    return new Response(JSON.stringify({ error: missatge }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, { path: "/" });
  cookies.set("sb-refresh-token", refresh_token, { path: "/" });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
