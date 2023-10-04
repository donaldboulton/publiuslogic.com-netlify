export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    avatar_url: string | null
                    cover: string | null
                    full_name: string | null
                    id: string
                    place: string | null
                    updated_at: string | null
                    username: string | null
                    website: string | null
                }
                Insert: {
                    avatar_url?: string | null
                    cover?: string | null
                    full_name?: string | null
                    id: string
                    place?: string | null
                    updated_at?: string | null
                    username?: string | null
                    website?: string | null
                }
                Update: {
                    avatar_url?: string | null
                    cover?: string | null
                    full_name?: string | null
                    id?: string
                    place?: string | null
                    updated_at?: string | null
                    username?: string | null
                    website?: string | null
                }
            }
            todos: {
                Row: {
                    id: number
                    inserted_at: string
                    is_complete: boolean | null
                    task: string | null
                    user_id: string
                }
                Insert: {
                    id?: number
                    inserted_at?: string
                    is_complete?: boolean | null
                    task?: string | null
                    user_id: string
                }
                Update: {
                    id?: number
                    inserted_at?: string
                    is_complete?: boolean | null
                    task?: string | null
                    user_id?: string
                }
            }
            Todos: {
                [_ in never]: never
            }
            views: {
                Row: {
                    count: number | null
                    created_at: string | null
                    id: number
                    slug: string
                }
                Insert: {
                    count?: number | null
                    created_at?: string | null
                    id?: number
                    slug?: string
                }
                Update: {
                    count?: number | null
                    created_at?: string | null
                    id?: number
                    slug?: string
                }
            }
            Views: {
                [_ in never]: never
            }
            loves: {
                Row: {
                    count: number | null
                    created_at: string | null
                    id: number
                    slug: string
                    user_id: string | null
                }
                Insert: {
                    count?: number | null
                    created_at?: string | null
                    id?: number
                    slug?: string
                    user_id: string | null
                }
                Update: {
                    count?: number | null
                    created_at?: string | null
                    id?: number
                    slug?: string
                    user_id: string | null
                }
            }
        }
        Loves: {
            [_ in never]: never
        }
        Functions: {
            delete_avatar: {
                Args: {
                    avatar_url: string
                }
                Returns: Record<string, unknown>
            }
            delete_storage_object: {
                Args: {
                    bucket: string
                    object: string
                }
                Returns: Record<string, unknown>
            }
            increment: {
                Args: {
                    slug_text: string
                }
                Returns: undefined
            }
        }
        Enums: {
            app_permission: 'channels.delete' | 'messages.delete'
            app_role: 'admin' | 'moderator'
            user_status: 'ONLINE' | 'OFFLINE'
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

interface Views {
    count: number
}

interface Loves {
    count: number
}
