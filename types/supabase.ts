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
      "candle-variants": {
        Row: {
          amount: number
          candleUuid: string
          size: string
          uuid: string
        }
        Insert: {
          amount?: number
          candleUuid: string
          size: string
          uuid?: string
        }
        Update: {
          amount?: number
          candleUuid?: string
          size?: string
          uuid?: string
        }
      }
      candles: {
        Row: {
          color: string
          image: string | null
          name: string
          uuid: string
        }
        Insert: {
          color: string
          image?: string | null
          name: string
          uuid?: string
        }
        Update: {
          color?: string
          image?: string | null
          name?: string
          uuid?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
