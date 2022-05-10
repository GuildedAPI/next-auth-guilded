import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers";
import { GuildedProfile } from "./typings";

export default function Guilded<P extends GuildedProfile>(options: OAuthUserConfig<P>): OAuthConfig<P> {
    return {
        id: "guilded",
        name: "Guilded",
        type: "oauth",
        authorization: {
            url: "https://authlink.guildedapi.com/auth",
            params: { scope: "identify" }
        },
        token: "https://authlink.guildedapi.com/api/v1/token",
        userinfo: "https://authlink.guildedapi.com/api/v1/users/@me",
        profile(data: GuildedProfile) {
            return {
                id: data.id,
                name: data.name,
                subdomain: data.subdomain,
                aliases: data.aliases,
                avatar: data.avatar,
                banner: data.banner,
                createdAt: data.createdAt,
                aboutInfo: data.aboutInfo,
                lastOnline: data.lastOnline
            };
        },
        options
    };
}
