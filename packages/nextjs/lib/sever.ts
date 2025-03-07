import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
// import { Database } from "../types/supabase";

interface SupabaseCookie  {
	name: string;
	value: string;
	options: CookieOptions;
  };
  

export function createSupabaseServer() {
	const cookieStore = cookies();

	return createServerClient(
		'BIfP5Hsw1ethRtdN4dUhjqSLk1tSld0ALn7-kkSkvtco0_yti2Vro7a_Ek3W7MfFli7ydEAm8AAeO6no65SEPFc', // URL
		'V4hini7rIqtazFTN8H60N1kcOYYVeUniO5Cn6uiF-I', // Anon Key
		{
			cookies: {
				getAll() {
					return cookieStore.getAll();
				},
				setAll(cookiesToSet: SupabaseCookie[]) {
					try {
						cookiesToSet.forEach(({ name, value, options }) =>
							cookieStore.set(name, value, options)
						);
					} catch {}
				},
			},
		}
	);
}