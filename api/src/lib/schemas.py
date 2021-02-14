from typing import Optional
from pydantic import BaseModel


class ItemBase(BaseModel):
    id: int


class Item(ItemBase):
    class Config:
        orm_mode = True
